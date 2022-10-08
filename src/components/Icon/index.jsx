import { ReactComponent as arrowBack } from './iconessvgs/back.svg'
import { ReactComponent as arrowLeft } from './iconessvgs/arrow-left.svg'
import { ReactComponent as arrowRight } from './iconessvgs/arrow-right.svg'
import { ReactComponent as Profile } from './iconessvgs/profile.svg'

const icons = {
    arrowBack,
    arrowLeft,
    arrowRight,
    Profile
}

export const Icon = ({name, ...props}) => {
    const Element = icons[name]
    return <Element {...props} />
}