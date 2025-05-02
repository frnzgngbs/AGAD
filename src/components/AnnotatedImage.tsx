interface AnnotatedImageProps {
	ultraSoundImage: string;
	file: File | null;
}

const AnnotatedImage = ({ ultraSoundImage, file }: AnnotatedImageProps) => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = ultraSoundImage;
		link.download = file?.name ?? "annotated-image.png";
		link.click();
	};

	return (
		<>
			<div className="w-full h-auto mx-auto">
				<h2 className="text-white text-lg font-semibold mb-4">
					Selected Ultrasound Image
				</h2>
				<div className="bg-[#1A223A]/2ill  rounded-xl p-4">
					<img
						src={ultraSoundImage}
						alt="Ultrasound"
						className="w-full h-auto max-h-96 object-contain rounded-lg object-fill"
					/>
				</div>
				<div className="mt-4 text-white text-center">
					{file && (
						<>
							<p className="text-sm text-white/70">
								Filename: {file.name}
							</p>
							<p className="text-sm text-white/70">
								Size: {(file.size / 1024).toFixed(2)} KB
							</p>
						</>
					)}
				</div>

				<div className="flex-center">
					<button
						onClick={handleDownload}
						className="
					w-full max-w-full rounded-xl py-2 text-white font-semibold text-sm mt-2
					bg-gradient-to-r from-[#2861EB] to-[#8F34EA]
					hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l
					active:scale-95 active:bg-gradient-to-r active:from-[#8F34EA] active:to-[#2861EB]
					transition-transform duration-300 ease-in-out transform
					cursor-pointer
					focus:outline-none focus:ring-2 focus:ring-[#2861EB] lg:w-1/2 xl:w-1/2 md:w-1/2
					">
						Download Annotated Image
					</button>
				</div>
			</div>
		</>
	);
};

export default AnnotatedImage;
