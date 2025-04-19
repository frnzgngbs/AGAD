import ImageUploader from "../components/ImageUploader";
import ProductDescription from "../components/ProductDescription";
import ProductName from "../components/ProductName";
import Square from "../components/Square";

function Home() {
	return (
		<>
			<div className="w-full flex-center flex-col">
				<div>
					<Square />
				</div>
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
					<ImageUploader />
				</div>
			</div>
		</>
	);
}

export default Home;
