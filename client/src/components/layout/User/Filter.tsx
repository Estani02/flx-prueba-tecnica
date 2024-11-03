import { Select } from "antd"
import { useEffect, useState } from "react"

import { UserStatus } from "@/api/types"
import { optionsStatus } from "@/constants/statusOptions"
import { useAppDispatch } from "@/store/hooks"
import { clearQuery, setQuery } from "@/store/slices/userSlice"

export function Filter() {
  const [selectedStatus, setSelectedStatus] = useState<UserStatus | undefined>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selectedStatus) {
      dispatch(setQuery({ key: "status", value: selectedStatus }))
    } else {
      dispatch(clearQuery("status"))
    }
  }, [selectedStatus, dispatch])

  return (
    <Select
      allowClear
      className="w-[210px]"
      options={optionsStatus}
      placeholder="Filtrar por estado"
      onChange={(value) => {
        setSelectedStatus(value)
      }}
    />
  )
}
