import {Button, SnsButtonContainer} from "./SnsButtonStyle";

export default function SnsButton({ model }) {
  return (
    <SnsButtonContainer>
      <Button href={model.url} target={"_blank"}>
        {model.text}
      </Button>
    </SnsButtonContainer>
  )
}