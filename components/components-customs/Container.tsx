import { ContainerProps } from '@react-email/components';
import React from 'react';

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className="container mx-auto max-w-[1280px] h-full">{children}</div>;
};

export default Container;
