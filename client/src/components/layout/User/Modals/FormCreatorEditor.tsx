import { Button, Form, Input, InputNumber, Modal, Select, Space } from "antd"
import { Controller, useForm } from "react-hook-form"
import { useEffect } from "react"

import { optionsStatus } from "@/constants/statusOptions"
import { User } from "@/api/types"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { hideModal } from "@/store/slices/modalSlice"
import { useCreateUserMutation, useUpdateUserMutation } from "@/api/userApi"

export function FormCreatorEditor({ refetch }: { refetch: () => void }) {
  const { control, handleSubmit, reset, setValue } = useForm<User>()
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector((state) => state.modal.isModalOpen)
  const selectedUser = useAppSelector((state) => state.modal.selectedUser)

  const [createUser] = useCreateUserMutation()
  const [updateUser] = useUpdateUserMutation()

  const handleFormSubmit = async (data: Partial<User>) => {
    if (isModalOpen.add) {
      await createUser(data)
      dispatch(hideModal("add"))
    } else if (isModalOpen.edit && selectedUser) {
      await updateUser({ id: selectedUser.id, body: data })
      dispatch(hideModal("edit"))
    }
    void refetch()
  }

  useEffect(() => {
    if (isModalOpen && selectedUser) {
      setValue("username", selectedUser.username)
      setValue("name", selectedUser.name)
      setValue("lastname", selectedUser.lastname)
      setValue("status", selectedUser.status)
      setValue("email", selectedUser.email)
      setValue("age", selectedUser.age)
    } else {
      reset()
    }
  }, [isModalOpen, selectedUser, reset, setValue])

  return (
    <Modal
      footer={[
        <Button
          key="confirm"
          type="primary"
          onClick={() => {
            void handleSubmit(handleFormSubmit)()
          }}
        >
          {isModalOpen.add ? "Agregar usuario" : "Editar usuario"}
        </Button>,
      ]}
      open={isModalOpen.add || isModalOpen.edit}
      title={isModalOpen.add ? "Agregar usuario" : "Editar usuario"}
      onCancel={() => {
        dispatch(hideModal(isModalOpen.add ? "add" : "edit"))
      }}
    >
      <form className="flex w-full justify-between gap-8">
        <Space className="flex-1" direction="vertical">
          <Controller
            control={control}
            name="username"
            render={({ field, fieldState }) => (
              <Form.Item
                help={fieldState.error?.message}
                label="Usuario"
                validateStatus={fieldState.error ? "error" : ""}
              >
                <Input {...field} placeholder="johndoe" />
              </Form.Item>
            )}
            rules={{ required: "Por favor ingrese el nombre de usuario" }}
          />
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <Form.Item
                help={fieldState.error?.message}
                label="Nombre"
                validateStatus={fieldState.error ? "error" : ""}
              >
                <Input {...field} placeholder="John" />
              </Form.Item>
            )}
            rules={{ required: "Por favor ingrese el nombre" }}
          />
          <Controller
            control={control}
            name="status"
            render={({ field, fieldState }) => (
              <Form.Item
                help={fieldState.error?.message}
                label="Estado"
                labelCol={{ span: 24 }}
                validateStatus={fieldState.error ? "error" : ""}
                wrapperCol={{ span: 24 }}
              >
                <Select
                  {...field}
                  options={optionsStatus}
                  placeholder="Seleccione un estado"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            )}
            rules={{ required: "Por favor seleccione un estado" }}
          />
        </Space>
        <Space className="flex-1" direction="vertical">
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <Form.Item
                help={fieldState.error?.message}
                label="Email"
                validateStatus={fieldState.error ? "error" : ""}
              >
                <Input {...field} placeholder="johndoe@domain.com" />
              </Form.Item>
            )}
            rules={{
              required: "Por favor ingrese el correo electrónico",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Por favor ingrese un correo electrónico válido",
              },
            }}
          />
          <Controller
            control={control}
            name="lastname"
            render={({ field, fieldState }) => (
              <Form.Item
                help={fieldState.error?.message}
                label="Apellido"
                validateStatus={fieldState.error ? "error" : ""}
              >
                <Input {...field} placeholder="Doe" />
              </Form.Item>
            )}
            rules={{ required: "Por favor ingrese el apellido" }}
          />
          <Controller
            control={control}
            name="age"
            render={({ field, fieldState }) => (
              <Form.Item
                help={fieldState.error?.message}
                label="Edad"
                validateStatus={fieldState.error ? "error" : ""}
              >
                <InputNumber {...field} className="w-full" placeholder="43" />
              </Form.Item>
            )}
            rules={{ required: "Por favor ingrese la edad" }}
          />
        </Space>
      </form>
    </Modal>
  )
}
