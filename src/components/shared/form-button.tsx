import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface formButtomProps{
    children:React.ReactNode;
}
export default function FormButton({children}:formButtomProps) {
    
    const {pending} = useFormStatus()
    
    return (
        <Button type="submit" isLoading ={pending} className="w-4 p-1 " color="primary" variant="bordered">
            {children}
        </Button>
  );
}
