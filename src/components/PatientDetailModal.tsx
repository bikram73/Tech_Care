import React from 'react';
import { Patient } from '../types';
import { X, ShieldCheck, Heart, Activity, FileText, Phone, Mail, Calendar, MapPin } from 'lucide-react';

interface PatientDetailModalProps {
  patient: Patient;
  isOpen: boolean;
  onClose: () => void;
}

export const PatientDetailModal: React.FC<PatientDetailModalProps> = ({
  patient,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072635]/40 backdrop-blur-xs">
      <div className="bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <img
              src={patient.avatar}
              alt={patient.name}
              className="w-14 h-14 rounded-full object-cover shadow-xs border border-gray-100"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-xl font-extrabold text-[#072635]">{patient.name}</h3>
              <p className="text-xs text-[#707070] font-medium">
                Patient ID: #{patient.id.toUpperCase().replace('-', '0')} • {patient.gender}, {patient.age} yrs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F6F7F8] text-gray-500 hover:text-[#072635] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-sm text-[#072635]">
          
          {/* General Information Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#707070] mb-3">
              General Demographics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F6F7F8] rounded-[12px] p-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#072635]" />
                <div>
                  <div className="text-xs text-[#707070]">Date of Birth</div>
                  <div className="font-semibold">{patient.dateOfBirth}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#072635]" />
                <div>
                  <div className="text-xs text-[#707070]">Primary Phone</div>
                  <div className="font-semibold">{patient.phoneNumber}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#072635]" />
                <div>
                  <div className="text-xs text-[#707070]">Emergency Contact</div>
                  <div className="font-semibold">{patient.emergencyContact}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#072635]" />
                <div>
                  <div className="text-xs text-[#707070]">Insurance Plan</div>
                  <div className="font-semibold">{patient.insuranceProvider}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Vital Status */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#707070] mb-3">
              Current Vital Metrics
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#E0F3FA] p-3.5 rounded-[10px]">
                <div className="text-xs text-[#707070] font-medium">Respiratory</div>
                <div className="text-lg font-bold text-[#072635] mt-1">{patient.respiratoryRate.value}</div>
                <div className="text-xs text-[#072635]">{patient.respiratoryRate.status}</div>
              </div>
              <div className="bg-[#FFE6E9] p-3.5 rounded-[10px]">
                <div className="text-xs text-[#707070] font-medium">Body Temp</div>
                <div className="text-lg font-bold text-[#072635] mt-1">{patient.temperature.value}</div>
                <div className="text-xs text-[#072635]">{patient.temperature.status}</div>
              </div>
              <div className="bg-[#FFE6F1] p-3.5 rounded-[10px]">
                <div className="text-xs text-[#707070] font-medium">Heart Rate</div>
                <div className="text-lg font-bold text-[#072635] mt-1">{patient.heartRate.value}</div>
                <div className="text-xs text-[#072635]">{patient.heartRate.status}</div>
              </div>
            </div>
          </div>

          {/* Active Diagnoses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#707070] mb-3">
              Diagnostic Summary ({patient.diagnosticList.length})
            </h4>
            <div className="space-y-2">
              {patient.diagnosticList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-[10px] border border-gray-100 bg-white"
                >
                  <div>
                    <div className="font-bold text-[#072635]">{item.name}</div>
                    <div className="text-xs text-[#707070]">{item.description}</div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F6F7F8] text-[#072635]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Files */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#707070] mb-3">
              Associated Lab Records
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {patient.labResults.map((lab) => (
                <div
                  key={lab.id}
                  className="flex items-center justify-between p-2.5 rounded-[8px] bg-[#F6F7F8]"
                >
                  <span className="font-medium text-xs truncate">{lab.name}</span>
                  <span className="text-[11px] text-[#707070] ml-2">{lab.fileSize}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] font-bold text-sm text-[#072635] cursor-pointer"
          >
            Close Profile
          </button>
        </div>

      </div>
    </div>
  );
};
