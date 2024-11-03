"use client"
import { Layout, Breadcrumb, Space } from "antd"

import { useGetUsersQuery } from "@/api/userApi"
import { LoadingSpinner } from "@/components/common/LoadingSpinner"
import { useAppSelector } from "@/store/hooks"
import { breadcrumbItems } from "@/constants/breadcrumbItems"
import { User } from "@/components/layout"

export default function Home() {
  const userQuery = useAppSelector((state) => state.user.query)
  const queryString = new URLSearchParams(userQuery).toString()
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
                <User.Search />
                <User.Filter />
              </Space>
              <User.AddButton />
            </div>
            <User.Table users={users || []} />
          </>
        )}
      </Layout.Content>
      <User.Modal.FormCreatorEditor refetch={refetch} />
      <User.Modal.Delete refetch={refetch} />
    </>
  )
}
