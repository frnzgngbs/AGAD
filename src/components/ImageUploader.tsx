import { useRef, useState } from "react";

const ImageUploader = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file && file.type.startsWith("image/")) {
			const imageUrl = URL.createObjectURL(file);
			setImagePreview(imageUrl);
		}
	};

	return (
		<div className="w-full flex-center flex-col border-2 border-dashed border-[#4E4F52] rounded-xl hover:border-[#4E4F52] transition-all duration-300">
			<div className="w-full h-full flex flex-col sm:flex-col md:flex-row p-5 space-y-4 md:space-y-0 md:space-x-8">
				{/* First div */}
				<div className="w-full sm:w-full md:w-1/2 flex flex-col justify-center">
					<p className="text-white text-center p-6 text-sm">
						Drag and drop your gallbladder ultrasound image, or
						click the button below to browse files.
					</p>
					<p className="text-white/30 text-[0.7rem] text-center mb-5">
						Supported formats: JPG, JPEG, PNG (Max: 200MB)
					</p>
					<div className="flex-center space-x-2">
						<button
							onClick={handleButtonClick}
							className="w-full max-w-full bg-gradient-to-r from-[#2861EB] to-[#8F34EA] rounded-xl py-2 text-white font-semibold
						transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l
						active:scale-95 active:bg-gradient-to-r active:from-[#8F34EA] active:to-[#2861EB] focus:outline-none focus:ring-2 focus:ring-[#2861EB] cursor-pointer text-sm">
							Browse Files
						</button>
						{!imagePreview ? (
							<button
								className="
									w-full max-w-full rounded-xl py-2 font-semibold text-sm
									bg-gray-700 text-white/40 cursor-not-allowed
									transition-none transform-none shadow-none
								"
								disabled>
								Annotate
							</button>
						) : (
							<button
								className="
									w-full max-w-full rounded-xl py-2 text-white font-semibold text-sm
									bg-gradient-to-r from-[#2861EB] to-[#8F34EA]
									hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l
									active:scale-95 active:bg-gradient-to-r active:from-[#8F34EA] active:to-[#2861EB]
									transition-transform duration-300 ease-in-out transform
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-[#2861EB]
							">
								Annotate
							</button>
						)}

						<input
							type="file"
							accept=".jpg,.jpeg,.png"
							ref={fileInputRef}
							onChange={handleFileChange}
							className="hidden"
						/>
					</div>
				</div>

				{/* Second div */}
				<div className="w-full sm:w-full md:w-1/2 h-full">
					<div className="w-full h-64 bg-[#1A223A] rounded-xl flex items-center justify-center overflow-hidden">
						{imagePreview ? (
							<img
								src={imagePreview}
								alt="Preview"
								className="object-fill w-full h-full rounded-xl"
							/>
						) : (
							<p className="text-white/20 text-sm">
								No image selected
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageUploader;
