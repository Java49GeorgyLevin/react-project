export type DialogType = {
    open: boolean;
    title: string;
    content: string;
    confirmationFn: (isOK: boolean) => void;
}