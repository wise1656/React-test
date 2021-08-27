import cn from 'classnames';

interface NormalButtonProps {
    title: string
    disable: boolean
    onClick: () => void
}

export function NormalButton(props: NormalButtonProps) {
    const {title, disable, onClick} = props;
    return <div className={cn("normal-button", {"disabled": disable})} onClick={() => !disable && onClick()}>
        {title}
    </div>;
}
