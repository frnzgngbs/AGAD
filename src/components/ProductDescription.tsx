const ProductDescription = () => {
	return (
		<>
			<div className="flex flex-col items-center space-y-3">
				<div className="w-full">
					<p className="text-white text-lg text-md">
						<span className="font-bold">AGAD</span> is an AI-powered
						tool that leverages YOLOv11, a state-of-the-art deep
						learning model, to detect and classify gallstones in
						gallbladder ultrasound images.
					</p>
				</div>
				<div className="w-full">
					<p className="text-white text-md">
						Upon uploading an image make sure that it is a
						gallbladder ultrasound image, the model classifies it
						into two categories:
					</p>
				</div>
				<p className="text-white text-md">
					The results are visually represented with bounding boxes
					around detected gallstones, and users can download the
					processed image for further analysis.
				</p>
				<p className="w-full text-white font-bold text-sm mt-3">
					Watch our promotional video
				</p>

				<div className="w-full aspect-video">
					<iframe
						className="w-full h-full rounded-md"
						src="https://www.youtube.com/embed/t8823wcLFdU"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			</div>
		</>
	);
};

export default ProductDescription;
