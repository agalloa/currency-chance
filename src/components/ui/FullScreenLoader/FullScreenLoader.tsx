import { DNA } from "react-loader-spinner";
import { LoaderScreen } from "./styled";

interface FullScreenLoaderProps {
  visible: boolean;
}

export const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  visible,
}) => {
  if (!visible) return null;

  return (
    <LoaderScreen>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderScreen>
  );
};
