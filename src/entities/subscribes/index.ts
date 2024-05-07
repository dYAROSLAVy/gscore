export { SubscribeSlider } from "./ui/subscribe-slider/subscribe-slider";
export {
  subscribesApi,
  useChangeProductMutation,
  useGetSubscribesSelfQuery,
  getSubscribesSelf,
  subscribesThunk,
} from "./api/api";
export { subscribesReducer } from "./model/reducers";
export type { SubscribesSchema } from "./model/types";
export { getSubscribesSlideIndex } from "./model/selectors";
