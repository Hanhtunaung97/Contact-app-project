import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiEdit, CiTrash } from "react-icons/ci";
import SweetAlert2 from "react-sweetalert2";
import { toast } from "sonner";
import { useDeleteContactMutation } from "../../store/services/Endpoints/contact.Endpoints";
const DataTableComponents = ({ data }) => {
  const [delFun, delData] = useDeleteContactMutation();
  const [swalProps, setSwalProps] = useState({});
  const handleDelete = async (id) => {
    console.log("del", id);
    await delFun(id);
  };
  const handleDeleteBtn = (id) => {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "You won't be able to recover this contact !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff304f",
      cancelButtonColor: "#107a8b",
      confirmButtonText: "Yes, delete it!",
      onResolve: () => {
        setSwalProps({
          show: false,
        });
      },
      onConfirm: () => {
        handleDelete(id);
        setSwalProps({
          show: false,
        });
        toast.success("You did it.", {
          description: "Your contact have been successfully deleted !",
          position: "bottom-left",
          richColors: true,
          dismissible: true,
          duration: 3000,
          style: {
            background: "#fff",
            color: "#107a8b",
          },
        });
      },
    });
  };
  return (
    <div className=" bg-white p-5 shadow rounded-lg">
      <Table>
        <TableCaption className=" text-basic font-semibold mt-10">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="font-headings bg-basic text-white hover:bg-basic ">
            <TableHead className="w-[100px] text-white rounded-s-lg">
              ID
            </TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-right text-white">Phone</TableHead>
            <TableHead className="text-white">Address</TableHead>
            <TableHead className="text-right text-white rounded-e-lg">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((el) => (
            <TableRow key={el.id} className="hover:bg-teal-50 border-0">
              <TableCell className="font-medium">{el.id}</TableCell>
              <TableCell className="font-medium">{el.name}</TableCell>
              <TableCell className="font-light">{el.email}</TableCell>
              <TableCell className="text-right font-light">
                {el.phone}
              </TableCell>
              <TableCell className="font-light">{el.address}</TableCell>
              <TableCell className=" flex justify-end items-center gap-x-3">
                <button className=" p-1 rounded-full border border-basic bg-basic hover:bg-teal-50 group duration-200 active:scale-110">
                  <CiEdit className=" w-5 h-5 stroke-1 text-teal-50 group-hover:text-basic pointer-events-none" />
                </button>
                <button
                  onClick={() => handleDeleteBtn(el.id)}
                  className=" p-1 rounded-full border border-danger bg-rose-50 hover:bg-danger group duration-200 active:scale-110"
                >
                  <CiTrash className=" w-5 h-5 stroke-1 text-danger group-hover:text-rose-50 pointer-events-none" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default DataTableComponents;
