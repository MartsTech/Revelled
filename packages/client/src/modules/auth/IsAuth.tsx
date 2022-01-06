import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "stores/store";

interface IsAuthProps {}

const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
  const { isLoggedIn } = useStore().userStore;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/?next" + router.pathname);
    }
  }, [isLoggedIn, router]);

  return <>{children}</>;
};

export default observer(IsAuth);
