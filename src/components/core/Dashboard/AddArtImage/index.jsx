import RenderSteps from "./RenderSteps"

export default function AddArtImage() {
    return (
        <>
            <div className="flex z-10 w-full items-start gap-x-6">
                <div className="flex flex-1 flex-col w-full">
                    <h1 className="mb-14 ml-16 md:ml-0 text-3xl font-medium text-richblack-5">
                        Add ArtImage
                    </h1>
                    <div className="flex-1">
                        <RenderSteps />
                    </div>
                </div>
                {/* ArtImage Upload Tips */}
                <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
                    <p className="mb-8 text-lg text-richblack-5">⚡ ArtImage Upload Tips</p>
                    <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
                        <li>Set the ArtImage Price option or make it free.</li>
                        <li>Standard size for the artImage thumbnail is 1024x576.</li>
                        <li>Video section controls the artImage overview video.</li>
                        <li>ArtImage Builder is where you create & organize a artImage.</li>
                        <li>
                            Add Topics in the ArtImage Builder section to create lessons,
                            quizzes, and assignments.
                        </li>
                        <li>
                            Information from the Additional Data section shows up on the
                            artImage single page.
                        </li>
                        <li>Make Announcements to notify any important</li>
                        <li>Notes to all enrolled buyers at once.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}