import { Button, Form, Modal } from "antd"

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { hideModal } from "@/store/slices/modalSlice"
import { useDeleteUserMutation } from "@/api/userApi"

export function DeleteUserModal({ refetch }: { refetch: () => void }) {
  const dispatch = useAppDispatch()
  const selectedUser = useAppSelector((state) => state.modal.selectedUser)
  const isModalOpen = useAppSelector((state) => state.modal.isModalOpen)

  const [deleteUser] = useDeleteUserMutation()

  const handleDelete = async () => {
    if (selectedUser) {
      await deleteUser(selectedUser.id)
      dispatch(hideModal("delete"))
      void refetch()
    }
  }

  return (
    <Modal
      footer={[
        <Button
          key="cancel"
          onClick={() => {
            dispatch(hideModal("delete"))
          }}
        >
          Cancelar
        </Button>,
        <Button
          key="confirm"
          danger
          type="primary"
          onClick={() => {
            void handleDelete()
          }}
        >
          Eliminar
        </Button>,
      ]}
      open={isModalOpen.delete}
      title="Eliminar usuario"
      width={438}
      onCancel={() => {
        dispatch(hideModal("delete"))
      }}
      onOk={() => {
        dispatch(hideModal("delete"))
      }}
    >
      <Form className="flex w-full justify-between gap-8" layout="vertical">
        <p className="my-8">
          ¿Está seguro que quiere eliminar el usuario{" "}
          <span className="text-[#E23336]">@{selectedUser?.username}</span>?
        </p>
      </Form>
    </Modal>
  )
}
