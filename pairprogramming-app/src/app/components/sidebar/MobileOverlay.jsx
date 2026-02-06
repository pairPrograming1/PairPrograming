export function MobileOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
      onClick={onClose}
    ></div>
  );
}
