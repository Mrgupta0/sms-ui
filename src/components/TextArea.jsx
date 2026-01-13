export default function TextArea({ label, value, onChange, placeholder }) {
  return (
    <div className="field">
      <label>{label}</label>
      <textarea
        rows={4}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
