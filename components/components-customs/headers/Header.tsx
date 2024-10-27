import BaseHeader from './BaseHeader'

interface HeaderProps {
	navItems: Array<string>;
}

const Header: React.FC<HeaderProps> = ({ navItems }) => (
	<BaseHeader isGradient={true} navItems={navItems} />
)

export default Header
