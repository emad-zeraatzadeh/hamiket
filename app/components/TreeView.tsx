import { initialTree } from "@/data/data"
import { Box } from "@mui/material"

export default function TreeView() {

  return (
    <Box>
        {
            initialTree.map((data) => {
                    data.label
            })
        }
    </Box>
  )
}
