import { Input } from "antd"
import { useEffect, useState } from "react"

import { useAppDispatch } from "@/store/hooks"
import { clearQuery, setQuery } from "@/store/slices/userSlice"

export function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setSearchTerm(value)
  }

  useEffect(() => {
    if (searchTerm) {
      dispatch(setQuery({ key: "q", value: searchTerm }))
    } else {
      dispatch(clearQuery("q"))
    }
  }, [searchTerm, dispatch])

  return (
    <Input.Search
      allowClear
      placeholder="Búsqueda por nombre o apellido"
      style={{ width: 290 }}
      value={searchTerm}
      onChange={handleChange}
    />
  )
}
