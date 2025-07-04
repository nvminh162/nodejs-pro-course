import { log } from "console";

const handleCreateUser = (
  fullName: string,
  email: string,
  address: string
) => {
    //insert to database
    console.log("check data: >>> ", fullName, email, address);
};

export { handleCreateUser };
