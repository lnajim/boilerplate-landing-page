import BaseHeader from './BaseHeader'

interface GradientHeaderProps {
	navItems: Array<string>;
}

const GradientHeader: React.FC<GradientHeaderProps> = ({ navItems }) => (
	<BaseHeader isGradient={true} navItems={navItems} />
)

export default GradientHeader
