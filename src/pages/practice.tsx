export async function getServerSideProps() {
  const url = `${process.env.DB_URL}/farmer_data`;
  const options = {
    method: "GET",
  };
  const res = await fetch(url, options);
  const farmerData = await res.json();

  return {
    props: {
      data: farmerData,
    },
  };
}

export default function Exam(props: any) {
  console.log(props.data.length / 10);
  return <p>{props.data.length}</p>;
  // props.data.map((farmerData: any) => {
  //   return <p>長さ{farmerData.length}</p>;
  // });
}
