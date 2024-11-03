import { Button } from "antd"

import { useAppDispatch } from "@/store/hooks"
import { showModal } from "@/store/slices/modalSlice"

export function AddButton() {
  const dispatch = useAppDispatch()

  return (
    <Button
      size="large"
      type="primary"
      onClick={() => {
        dispatch(showModal({ modalName: "add" }))
      }}
    >
      Agregar usuario
    </Button>
  )
}
