import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["COMPLETED"],
      default: "COMPLETED",
    },
  },
  {
    timestamps: true,
  }
);

purchaseSchema.index(
  { user: 1, course: 1 },
  { unique: true}
);

const Purchase = mongoose.models.Purchase || mongoose.model("Purchase", purchaseSchema)

export default Purchase;