(() => {
  const script =
    document.currentScript;

  if (!script) return;

  const mode =
    String(
      script.dataset.mode || "index"
    )
      .trim()
      .toLowerCase();

  const allowed =
    new Set([
      "index",
      "calculator",
      "counter"
    ]);

  const selected =
    allowed.has(mode)
      ? mode
      : "index";

  const width =
    String(
      script.dataset.width || "100%"
    );

  const height =
    selected === "calculator"
      ? String(
          script.dataset.height || "520"
        )
      : selected === "counter"
        ? String(
            script.dataset.height || "390"
          )
        : String(
            script.dataset.height || "300"
          );

  const base =
    "https://funeral-atlas.art";

  const wrapper =
    document.createElement("div");

  wrapper.setAttribute(
    "data-funeral-atlas-widget",
    selected
  );

  wrapper.style.cssText =
    "max-width:680px;width:" +
    width +
    ";font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;";

  const frame =
    document.createElement("iframe");

  frame.src =
    base +
    "/embed/" +
    selected +
    ".html?utm_source=embed&utm_medium=widget&utm_campaign=" +
    encodeURIComponent(
      selected
    );

  frame.title =
    selected === "calculator"
      ? "Калькулятор Funeral Atlas"
      : selected === "counter"
        ? "Funeral Atlas Market Counter"
        : "Funeral Atlas Price Index";

  frame.loading = "lazy";

  frame.style.cssText =
    "display:block;width:100%;height:" +
    height +
    "px;border:0;border-radius:16px;overflow:hidden;";

  frame.setAttribute(
    "referrerpolicy",
    "strict-origin-when-cross-origin"
  );

  const attribution =
    document.createElement("a");

  attribution.href =
    base +
    "/?utm_source=embed&utm_medium=attribution&utm_campaign=" +
    encodeURIComponent(
      selected
    );

  attribution.target = "_blank";
  attribution.rel = "noopener";

  attribution.textContent =
    "Данные и расчёт · Funeral Atlas";

  attribution.style.cssText =
    "display:inline-block;margin-top:7px;font-size:12px;color:#666;text-decoration:none;";

  wrapper.append(
    frame,
    attribution
  );

  script.insertAdjacentElement(
    "afterend",
    wrapper
  );
})();
