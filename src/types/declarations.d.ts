declare module "redux-persist/integration/react" {
  import { Persistor } from "redux-persist";

  export interface PersistGateProps {
    loading?: React.ReactNode;
    persistor: Persistor;
  }

  export const PersistGate: React.FC<PersistGateProps>;
}
