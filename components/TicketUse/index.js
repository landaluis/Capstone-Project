import styled from "styled-components";
import Link from "next/link";

export default function TicketUse({ id }) {
  return (
    <>
      <Link href={`/ticketpage?id=${id}`}>
        <TicketButton></TicketButton>
      </Link>
    </>
  );
}

const TicketButton = styled.button`
  margin: 16px;
  position: absolute;
  width: 13px;
  height: 20px;
  top: 90px;
  left: 298px;
  border: 1px solid grey;

  background-color: #e08989;
  transform: rotate(20deg);
`;
