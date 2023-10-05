import { CSSProperties } from "react"

export default  const Background = ({ children, imgSrc, style }: { children?: React.ReactNode, imgSrc?: string, style?: CSSProperties }) => {
    return (
        <div style={{ position: 'relative' }}>
            <div style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
            }}>
                <img src={imgSrc} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.5,
                    ...style

                }} />
            </div>
            <div style={{ position: 'relative' }}>
                {children}
            </div>
        </div>
    )
}