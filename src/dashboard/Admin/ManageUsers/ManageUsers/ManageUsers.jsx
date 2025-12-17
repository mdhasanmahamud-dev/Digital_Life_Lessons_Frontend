import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ManageUsersTable from "../ManageUsersTable/ManageUsersTable";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading: userLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data.users;
    },
  });

  if (userLoading) return <LoadingSpinner />;

  return (
    <div>
      <ManageUsersTable users={users} refetch={refetch}/>
    </div>
  );
};

export default ManageUsers;
