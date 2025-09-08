
export function quizEmail({
  userName,
  totalScore,
  riskLevel,
  recommendation,   
  answers = [],   
  brand = { name: "Pharma Quiz", support: "support@example.com" },
}) {
  const { emoji, color, bg, title, subtitle, tips, products, ctaText, ctaUrl } = recommendation;

  const subject = `${emoji} Your Results — ${title}`;

  const text = [
    `Hi ${userName},`,
    ``,
    `Score: ${totalScore}`,
    `Risk level: ${riskLevel}`,
    `${title} — ${subtitle}`,
    ``,
    `Top tips:`,
    ...tips.map((t, i) => `${i + 1}. ${t}`),
    ``,
    `Recommendations:`,
    ...products.map(p => `• ${p.name}: ${p.short} — ${p.why}`),
    ``,
    `View your full plan: ${ctaUrl}`,
    ``,
    `— ${brand.name}`,
    `Need help? ${brand.support}`,
  ].join("\n");

  // Build Q/A rows (optional)
  const answerRows = (answers || []).slice(0, 10).map(a => {
    const q = escapeHtml(a.question || "");
    const ans = escapeHtml(a.answer || "");
    const sc = String(a.score ?? "");
    return `
      <tr>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;">${q}</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;">${ans}</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;text-align:center;">${sc}</td>
      </tr>`;
  }).join("");

  // Build product cards
  const productCards = products.map(p => `
    <tr>
      <td style="padding:12px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;">
          <tr>
            <td style="padding:14px;">
              <div style="font-weight:600;font-size:15px;">${escapeHtml(p.name)}</div>
              <div style="font-size:13px;color:#6b7280;margin:4px 0 6px;">${escapeHtml(p.short)}</div>
              <div style="font-size:13px;color:#374151;">${escapeHtml(p.why)}</div>
              <div style="margin-top:10px;">
                <a href="${p.link}" style="font-size:13px;text-decoration:none;">Learn more →</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>`).join("");

  const html = `
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f6;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="width:100%;max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.06);font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
          <!-- Header -->
          <tr>
            <td style="padding:18px 22px;background:${bg};border-bottom:1px solid #e5e7eb;">
              <div style="font-size:18px;font-weight:700;color:${color};">${emoji} ${title}</div>
              <div style="font-size:13px;color:#374151;margin-top:4px;">${escapeHtml(subtitle)}</div>
            </td>
          </tr>

          <!-- Summary -->
          <tr>
            <td style="padding:18px 22px;">
              <div style="font-size:16px;font-weight:600;margin-bottom:4px;">Hi ${escapeHtml(userName)},</div>
              <div style="font-size:14px;color:#374151;">Here’s a quick summary of your assessment.</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;border-collapse:collapse;">
                <tr>
                  <td style="padding:12px;border:1px solid #e5e7eb;border-radius:8px;">
                    <div style="display:flex;gap:10px;align-items:center;">
                      <span style="display:inline-block;padding:4px 10px;border-radius:999px;background:${bg};color:${color};font-weight:700;font-size:12px;">${riskLevel} risk</span>
                      <span style="font-size:14px;color:#111827;">Total score: <strong>${totalScore}</strong></span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Recommendations -->
          <tr>
            <td style="padding:0 22px;">
              <div style="font-size:16px;font-weight:700;margin:4px 0 8px;">Personalized Recommendations</div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 22px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${productCards}
              </table>
            </td>
          </tr>

          <!-- Tips -->
          <tr>
            <td style="padding:0 22px 18px;">
              <div style="font-size:16px;font-weight:700;margin:8px 0 6px;">Top 3 Tips</div>
              <ol style="margin:0;padding-left:18px;color:#374151;font-size:14px;">
                ${tips.map(t => `<li style="margin:6px 0;">${escapeHtml(t)}</li>`).join("")}
              </ol>
            </td>
          </tr>

          <!-- Answers (optional) -->
          ${answerRows ? `
          <tr>
            <td style="padding:0 22px 18px;">
              <div style="font-size:15px;font-weight:700;margin:8px 0 6px;">Your Answers</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:13px;color:#111827;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
                <tr style="background:#f9fafb;">
                  <th align="left" style="padding:8px 12px;border:1px solid #e5e7eb;">Question</th>
                  <th align="left" style="padding:8px 12px;border:1px solid #e5e7eb;">Your answer</th>
                  <th align="center" style="padding:8px 12px;border:1px solid #e5e7eb;">Score</th>
                </tr>
                ${answerRows}
              </table>
            </td>
          </tr>` : ""}

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:4px 22px 22px;">
              <a href="${ctaUrl}" style="display:inline-block;text-decoration:none;background:${color};color:#ffffff;font-weight:700;border-radius:999px;padding:10px 18px;font-size:14px;">${ctaText}</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:14px 22px;border-top:1px solid #f0f0f0;color:#6b7280;font-size:12px;">
              <div><strong>${escapeHtml(brand.name)}</strong> — This information is educational and not a substitute for medical advice.</div>
              <div style="margin-top:4px;">Need help? <a href="mailto:${escapeHtml(brand.support)}" style="color:#6b7280;text-decoration:underline;">${escapeHtml(brand.support)}</a></div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

  return { subject, text, html };
}

// Minimal HTML escaping for safety
function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
