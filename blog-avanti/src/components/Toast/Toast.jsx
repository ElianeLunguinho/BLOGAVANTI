import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiInfo, FiX } from 'react-icons/fi';
import { useApp } from '../../context/AppContext';
import './Toast.css';

const Toast = () => {
  const { toast } = useApp();

  const getIcon = () => {
    switch (toast?.type) {
      case 'error':
        return <FiX />;
      case 'info':
        return <FiInfo />;
      default:
        return <FiCheck />;
    }
  };

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className={`toast toast-${toast.type || 'success'}`}
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          transition={{ duration: 0.3 }}
        >
          <span className="toast-icon">{getIcon()}</span>
          <span className="toast-message">{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
