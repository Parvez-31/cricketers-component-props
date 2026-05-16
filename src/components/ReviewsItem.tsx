import type { ReviewsItemProps } from "../typescript/type/cricketers.props.type";
const ReviewsItem = ({ review }: ReviewsItemProps) => {
  return (
    <>
      <div key={review.id}>
        <p>{review.fanName}</p>
        <p>{review.rating}</p>
        <p>{review.comment}</p>
        <p>{review.createdAt}</p>
      </div>
    </>
  );
};

export default ReviewsItem;
