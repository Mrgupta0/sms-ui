export default function Counter({ encoding, characters, parts, totalSms }) {
  return (
    <div className="counter-box">
      <div><strong>Encoding:</strong> {encoding}</div>
      <div><strong>Characters:</strong> {characters}</div>
      <div><strong>SMS Parts:</strong> {parts}</div>
      <div><strong>Total SMS:</strong> {totalSms}</div>

    </div>
  );
}
