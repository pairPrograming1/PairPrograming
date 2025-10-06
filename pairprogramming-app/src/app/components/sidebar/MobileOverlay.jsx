export function MobileOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
      onClick={onClose}
    ></div>
  );
}
