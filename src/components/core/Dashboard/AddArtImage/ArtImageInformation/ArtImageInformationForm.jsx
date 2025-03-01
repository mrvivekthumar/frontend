import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MdNavigateNext } from "react-icons/md"
import IconBtn from "../../../../common/IconBtn"
import {
    addArtImageDetails,
    editArtImageDetails,
    fetchArtImageCategories,
} from "../../../../../services/operations/artImageDetailsAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BiUpload } from "react-icons/bi";
import RequirementField from "./RequirementField";
import { setStep, setArtImage } from "../../../../../slices/artImageSlice";
import { ARTIMAGES_STATUS } from "../../../../../utils/constants";
import { toast } from "react-hot-toast";
import ChipInput from "./ChipInput";
import Upload from "../Upload";

const ArtImageInformationForm = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { artImage, editArtImage } = useSelector((state) => state.artImage);
    const [loading, setLoading] = useState(false);
    const [artImageCategories, setArtImageCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            const categories = await fetchArtImageCategories();
            if (categories.length > 0) {
                setArtImageCategories(categories);
            }
            setLoading(false);
        };

        if (editArtImage) {
            setValue("artImageTitle", artImage.artImageName);
            setValue("artImageShortDesc", artImage.artImageDescription);
            setValue("artImagePrice", artImage.price);
            setValue("artImageTags", artImage.tag);
            setValue("artImageBenefits", artImage.whatYouWillLearn);
            setValue("artImageCategory", artImage.category);
            setValue("artImageRequirements", artImage.instructions);
            setValue("artImageImage", artImage.thumbnail);
        }

        getCategories();
    }, []);

    const isFormUpdated = () => {
        const currentValues = getValues();
        if (
            currentValues.artImageTitle !== artImage.artImageName ||
            currentValues.artImageShortDesc !== artImage.artImageDescription ||
            currentValues.artImagePrice !== artImage.price ||
            currentValues.artImageTags.toString() !== artImage.tag.toString() ||
            currentValues.artImageBenefits !== artImage.whatYouWillLearn ||
            currentValues.artImageCategory._id !== artImage.category._id ||
            currentValues.artImageImage !== artImage.thumbnail ||
            currentValues.artImageRequirements.toString() !==
            artImage.instructions.toString()
        )
            return true;
        else return false;
    };

    //handles next button click
    const onSubmit = async (data) => {
        if (editArtImage) {
            if (isFormUpdated()) {
                const currentValues = getValues();
                const formData = new FormData();

                formData.append("artImageId", artImage._id);
                if (currentValues.artImageTitle !== artImage.artImageName) {
                    formData.append("artImageName", data.artImageTitle);
                }

                if (currentValues.artImageShortDesc !== artImage.artImageDescription) {
                    formData.append("artImageDescription", data.artImageShortDesc);
                }

                if (currentValues.artImagePrice !== artImage.price) {
                    formData.append("price", data.artImagePrice);
                }

                if (currentValues.artImageTags.toString() !== artImage.tag.toString()) {
                    formData.append("tag", JSON.stringify(data.artImageTags));
                }

                if (currentValues.artImageBenefits !== artImage.whatYouWillLearn) {
                    formData.append("whatYouWillLearn", data.artImageBenefits);
                }

                if (currentValues.artImageCategory._id !== artImage.category._id) {
                    formData.append("category", data.artImageCategory);
                }

                if (
                    currentValues.artImageRequirements.toString() !==
                    artImage.instructions.toString()
                ) {
                    formData.append(
                        "instructions",
                        JSON.stringify(data.artImageRequirements)
                    );
                }

                if (currentValues.artImageImage !== artImage.thumbnail) {
                    formData.append("thumbnailImage", data.artImageImage);
                }

                setLoading(true);
                const result = await editArtImageDetails(formData, token);
                setLoading(false);
                if (result) {
                    setStep(2);
                    dispatch(setArtImage(result));
                }
            } else {
                toast.error("NO Changes made so far");
            }
            console.log("PRINTING FORMDATA", formData);
            console.log("PRINTING result", result);

            return;
        }

        //create a new artImage
        const formData = new FormData();
        formData.append("artImageName", data.artImageTitle);
        formData.append("artImageDescription", data.artImageShortDesc);
        formData.append("price", data.artImagePrice);
        formData.append("whatYouWillLearn", data.artImageBenefits);
        formData.append("category", data.artImageCategory);
        formData.append("instructions", JSON.stringify(data.artImageRequirements));
        formData.append("status", ARTIMAGES_STATUS.DRAFT);
        formData.append("tag", JSON.stringify(data.artImageTags));
        formData.append("thumbnailImage", data.artImageImage);

        setLoading(true);
        console.log("BEFORE add artImage API call");
        console.log("PRINTING FORMDATAiii", formData);
        formData.forEach((value, key) => {
            console.log(key, value);
        });

        const result = await addArtImageDetails(formData, token);
        if (result) {
            //console.log(setArtImage(result));
            dispatch(setStep(2));
            dispatch(setArtImage(result));
        }
        setLoading(false);
        console.log("PRINTING FORMDATAAAA", formData);
        console.log("PRINTING result", result);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8"
        >
            <div className="text-richblack-100">
                <label htmlFor="artImageTitle">
                    ArtImage Title<sup>*</sup>
                </label>
                <input
                    id="artImageTitle"
                    placeholder="Enter ArtImage Title"
                    {...register("artImageTitle", { required: true })}
                    className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100"
                />
                {errors.artImageTitle && <span>ArtImage Title is Required**</span>}
            </div>

            <div className="text-richblack-100">
                <label htmlFor="artImageShortDesc">
                    ArtImage Short Description<sup>*</sup>
                </label>
                <textarea
                    id="artImageShortDesc"
                    placeholder="Enter Description"
                    {...register("artImageShortDesc", { required: true })}
                    className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100 h-[150px]"
                />
                {errors.artImageShortDesc && (
                    <span>ArtImage Description is required**</span>
                )}
            </div>

            <div className="text-richblack-100 relative">
                <label htmlFor="artImagePrice">
                    ArtImage Price<sup>*</sup>
                </label>
                <input
                    id="artImagePrice"
                    placeholder="Enter ArtImage Price"
                    {...register("artImagePrice", {
                        required: true,
                        valueAsNumber: true,
                    })}
                    className="w-full pl-6 pr-3 py-2 rounded-md bg-richblack-700 text-richblack-100"
                />
                <HiOutlineCurrencyRupee className="absolute top-[55%] left-1 text-richblack-400" />
                {errors.artImagePrice && <span>ArtImage Price is Required**</span>}
            </div>

            <div className="text-richblack-100">
                <label htmlFor="artImageCategory">
                    ArtImage Category<sup>*</sup>
                </label>
                <select
                    id="artImageCategory"
                    className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100"
                    defaultValue=""
                    {...register("artImageCategory", { required: true })}
                >
                    <option value="" disabled>
                        Choose a Category
                    </option>

                    {!loading &&
                        artImageCategories.map((category, index) => (
                            <option key={index} value={category?._id}>
                                {category?.name}
                            </option>
                        ))}
                </select>
                {errors.artImageCategory && <span>ArtImage Category is Required</span>}
            </div>

            {/* create a custom component for handling tags input */}
            <ChipInput
                label="Tags"
                name="artImageTags"
                placeholder="Enter Tags and press Enter"
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
            />

            {/* create a component for uploading and showing preview of media */}
            <Upload
                name="artImageImage"
                label="ArtImage Thumbnail"
                register={register}
                setValue={setValue}
                errors={errors}
                editData={editArtImage ? artImage?.thumbnail : null}
            />

            {/*     Benefits of the ArtImage */}
            <div className="text-richblack-100">
                <label>
                    Benefits of the artImage<sup>*</sup>
                </label>
                <textarea
                    id="artImagebenefits"
                    placeholder="Enter Benefits of the artImage"
                    {...register("artImageBenefits", { required: true })}
                    className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100 min-h-[150px]"
                />
                {errors.artImageBenefits && (
                    <span>Benefits of the artImage are required**</span>
                )}
            </div>

            <RequirementField
                name="artImageRequirements"
                label="Requirements/Instructions"
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
            />
            <div className="flex gap-x-2">
                {editArtImage && (
                    <button
                        onClick={() => dispatch(setStep(2))}
                        className="flex items-center gap-x-2 text-black bg-richblack-300 rounded-md px-3 py-1"
                    >
                        Continue Without Saving
                    </button>
                )}

                <div className="flex text-richblack-900 rounded-md px-3 py-1 font-medium items-center text-md bg-yellow-50 w-fit">
                    <button>
                        {
                            !editArtImage ? "Next" : "Save Changes"
                        }
                    </button>
                    <MdNavigateNext />
                </div>
            </div>
        </form>
    );
};

export default ArtImageInformationForm;