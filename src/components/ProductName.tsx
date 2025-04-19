import React from "react";

type ProductNameProps = {
	fontSize: string;
	startColor: string;
	endColor: string;
};

const ProductName: React.FC<ProductNameProps> = ({
	fontSize,
	startColor,
	endColor,
}) => {
	return (
		<>
			<h1
				className="font-bold bg-clip-text text-transparent inline-block"
				style={{
					fontSize: fontSize,
					backgroundImage: `linear-gradient(90deg, ${startColor} 35%, ${endColor} 64%)`,
				}}>
				AGAD
			</h1>
		</>
	);
};

export default ProductName;
