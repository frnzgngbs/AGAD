import { useEffect, useRef, useState } from "react";
import ImageUploader from "../components/ImageUploader";
import ProductDescription from "../components/ProductDescription";
import ProductName from "../components/ProductName";
import Square from "../components/Square";
import AnnotatedImage from "../components/AnnotatedImage";
import Spinner from "../components/Spinner";

function Home() {
	const [ultraSoundImage, setUltraSoundImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const bottomRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (ultraSoundImage) {
			const imageUrl = URL.createObjectURL(ultraSoundImage);
			setImagePreview(imageUrl);

			return () => {
				URL.revokeObjectURL(imageUrl);
			};
		} else {
			setImagePreview(null);
		}
	}, [ultraSoundImage]);

	useEffect(() => {
		if (isLoading && bottomRef.current) {
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [isLoading]);

	return (
		<>
			<div className="w-full flex-center flex-col p-5">
				<div className="mt-2">
					<ProductName
						fontSize="45px"
						startColor="#2861EB"
						endColor="#8F34EA"
					/>
				</div>

				<div className="flex justify-center w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2 mx-auto">
					<p className="text-white text-xl font-bold text-center">
						Automated Gallstone Detection
					</p>
				</div>

				<div className="card">
					<ProductDescription />
				</div>

				<div className="card">
					<ImageUploader
						setUltraSoundImage={setUltraSoundImage}
						setIsLoading={setIsLoading}
						bottomRef={bottomRef}
					/>
				</div>

				{isLoading && (
					<div ref={bottomRef}>
						<Spinner />
					</div>
				)}

				{imagePreview && ultraSoundImage && !isLoading && (
					<div className="card" ref={bottomRef}>
						<AnnotatedImage
							ultraSoundImage={imagePreview}
							file={ultraSoundImage}
						/>
					</div>
				)}
			</div>
		</>
	);
}

export default Home;
