import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    health: [
      {
        height: {
          type: Number,
        },
        weight: {
          type: Number,
        },
      },
    ],
    isDiagnosed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
