import { Button, Space, Table as TableAntd, Tag } from "antd"

import { User, UserStatus } from "@/api/types"
import { useAppDispatch } from "@/store/hooks"
import { showModal } from "@/store/slices/modalSlice"

export function Table({ users }: { users: User[] }) {
  const dispatch = useAppDispatch()

  const columns = [
    {
      title: "Usuario",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      width: "5%",
      render: (status: UserStatus) => (
        <Tag className="capitalize" color={status === "active" ? "success" : "error"}>
          {status === "active" ? "Activo" : "Inactivo"}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      key: "action",
      width: "10%",
      render: (_: unknown, record: User) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => {
              dispatch(showModal({ modalName: "edit", user: record }))
            }}
          >
            Editar
          </Button>
          <Button
            type="link"
            onClick={() => {
              dispatch(showModal({ modalName: "delete", user: record }))
            }}
          >
            Eliminar
          </Button>
        </Space>
      ),
    },
  ]

  return <TableAntd columns={columns} dataSource={users} />
}
