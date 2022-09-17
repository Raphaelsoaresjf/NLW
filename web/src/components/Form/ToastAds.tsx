import * as Toast from '@radix-ui/react-toast';

interface ToastAdsProps {
    title: string;
    description: string;
    backgorund: string;
}

export function ToastAds(props: ToastAdsProps) {
    return(
        <Toast.Provider swipeDirection="right">
            <Toast.Root className={`w-10 h-8 py-4 px-4 ${props.backgorund} text-white`}>
                <Toast.Title className="font-bold">{props.title}</Toast.Title>
                <Toast.Description>{props.description}</Toast.Description>
                <Toast.Close />
            </Toast.Root>
        </Toast.Provider>
    )
   
}