import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from '../student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
  },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fathersName: { type: String, required: true },
  fathersOccupation: {
    type: String,
    required: true,
  },
  fathersContactNo: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  mothersOccupation: {
    type: String,
    required: true,
  },
  mothersPhoneNo: {
    type: String,
    required: true,
  },
});
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  bloodtype: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  email: {
    type: String,
    required: true,
  },
  DateOfBirth: { type: String },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  emergencyPhoneNo: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  profileImg: { type: String },
  localGuardian: localGuardianSchema,

  isActive: ['active', 'inactive'],
});

//model

export const StudentModel = model<Student>('Student', studentSchema);
