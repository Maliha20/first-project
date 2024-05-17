export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fathersName: string;
  fathersOccupation: string;
  fathersContactNo: string;
  mothersName: string;
  mothersOccupation: string;
  mothersPhoneNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  bloodtype: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  email: string;
  DateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  phoneNo: string;
  emergencyPhoneNo: 'string';
  guardian: Guardian;
  profileImg?: string;
  localGuardian: LocalGuardian;
  isActive: 'active' | 'inactive';
};
