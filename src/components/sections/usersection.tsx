import ProfileRow from "../profilerow";

export default function UserSection() {
	return (
		<div className="w-11/12 h-full py-10">
			<h1 className="font-bold pb-4">Players</h1>
			<div className="flex flex-col space-y-2">
				<ProfileRow
					isOnline={true}
					imageUrl="https://avatars.githubusercontent.com/u/124599?v=4"
					name="test"
				/>
				{/* <ProfileRow
					isOnline={true}
					imageUrl="https://avatars.githubusercontent.com/u/124599?v=4"
					name="test"
				/>
				<ProfileRow
					isOnline={true}
					imageUrl="https://avatars.githubusercontent.com/u/124599?v=4"
					name="test"
				/>
				<ProfileRow
					isOnline={false}
					imageUrl="https://avatars.githubusercontent.com/u/124599?v=4"
					name="test"
				/> */}
			</div>
		</div>
	);
}
