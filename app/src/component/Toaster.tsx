import { Toaster } from 'sonner';
{/*eslint-disable-next-line */ }
export default function RootLayout({ children }: any) {
    return (
        <html lang="en">
            <body>
                {children}
                <Toaster position='top-right' richColors />
            </body>
        </html>
    )
}