import React, { useMemo, useState } from "react";
import Layout from "../../Layouts/Index";
import NotificationCard from "../../components/Notification/NotificationCard";
import { getNotification } from "../../API/Firestore";
import uuid from "react-uuid";
import Loader from "../../components/common/Loader";

export default function Notification() {
  const [notification, setNotification] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    getNotification(setNotification, setIsLoading);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="w-3/4 mx-auto bg-white border-2">
          {notification &&
            notification.map((notice) => {
              return <NotificationCard key={uuid()} notice={notice} />;
            })}
        </div>
      )}
    </Layout>
  );
}
