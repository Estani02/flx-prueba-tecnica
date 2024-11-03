"use client"
import { Layout, Breadcrumb, Space, Button } from "antd"

import { useGetUsersQuery } from "@/api/userApi"
import { LoadingSpinner } from "@/components/common/LoadingSpinner"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { showModal } from "@/store/slices/modalSlice"
import { UserSearch } from "@/components/layout/user/UserSearch"
import { UserFilter } from "@/components/layout/user/UserFilter"
import { breadcrumbItems } from "@/constants/breadcrumbItems"
import { UserTable } from "@/components/layout/user/UserTable"
import { UserFormModal } from "@/components/layout/user/UserFormModal"
import { DeleteUserModal } from "@/components/layout/user/DeleteUserModal"

export default function Home() {
  const userQuery = useAppSelector((state) => state.user.query)
  const queryString = new URLSearchParams(userQuery).toString()
  const dispatch = useAppDispatch()
  const {
    data: users,
    error,
    isLoading,
    refetch,
  } = useGetUsersQuery(queryString ? `?${queryString}` : "")

  return (
    <>
      <Layout.Content className="px-28">
        {isLoading ? (
          <div className="flex h-screen w-full items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <p>Ocurrió un error al cargar los usuarios</p>
        ) : (
          <>
            <Breadcrumb className="my-4" items={breadcrumbItems} />
            <div className="mb-5 flex w-full justify-between">
              <Space direction="horizontal">
                <UserSearch />
                <UserFilter />
              </Space>
              <Button
                size="large"
                type="primary"
                onClick={() => {
                  dispatch(showModal({ modalName: "add" }))
                }}
              >
                Agregar usuario
              </Button>
            </div>
            <UserTable users={users || []} />
          </>
        )}
      </Layout.Content>
      <UserFormModal refetch={refetch} />
      <DeleteUserModal refetch={refetch} />
    </>
  )
}
