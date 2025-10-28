import { BookOpen } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Lovable = () => {
  return (
    <CourseLayout
      title="特殊課 - Lovable"
      subtitle="用 Vibe Coding 開外掛 - 一天學會 Lovable + Automation + Agent!"
      icon={BookOpen}
    >
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            打造個人專屬無敵網站，輕鬆實現各種創意，省下開發成本的秘密武器
          </p>
        </section>

        <section className="flex gap-4 flex-wrap">
          <a 
            href="#course-intro" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            📖 課程介紹
          </a>
          <a 
            href="https://smart4a.tw/edu/LovableClass.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            📚 課程報名
          </a>
        </section>

        <section id="course-intro">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">課程介紹</h2>
          <p className="text-muted-foreground leading-relaxed">
            帶你從 Lovable 網站生成器出發，結合 Make/n8n 與 Dify，完整體驗 Vibe Coding × 自動化 × AI Agent 協同任務的威力。
            不論你是行銷人、設計師、專案 PM 或創業者，只要掌握這套流程，就能自己打造屬於你的「無敵網站」。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">你是否正在面對這些困境？</h2>
          <p className="text-muted-foreground mb-6">
            如果你有以下任何一個困擾，這堂課將徹底改變你的工作方式
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">網站開發成本高</h3>
              <p className="text-muted-foreground leading-relaxed">
                找工程師開發網站需花費大量時間和金錢，每次修改內容都要重新委託，效率低下又增加成本負擔。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">工具整合困難</h3>
              <p className="text-muted-foreground leading-relaxed">
                市面上各種工具之間難以串接，導致自動化流程經常中斷，需要人工手動處理，無法實現真正的無縫整合。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">AI 應用複雜</h3>
              <p className="text-muted-foreground leading-relaxed">
                想導入 AI 功能，但不知從何著手，找不到簡單方法將 AI 與現有網站或工作流程整合，導致錯失商機。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">平台使用費用高</h3>
              <p className="text-muted-foreground leading-relaxed">
                各種網站生成平台的 credits 費用高昂，像 Lovable 的使用成本每月動輒上萬，難以長期持續負擔。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">維護耗時費力</h3>
              <p className="text-muted-foreground leading-relaxed">
                網站上線後的更新、調整和維護需要不斷投入時間和精力，分散了你在核心業務上的專注力。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">缺乏技術支持</h3>
              <p className="text-muted-foreground leading-relaxed">
                面對技術問題時找不到合適的解決方案，只能依賴昂貴的顧問服務或花費大量時間自學摸索。
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-8 px-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-foreground">準備好開啟你的 Vibe Coding 之旅了嗎?</h2>
          <p className="text-muted-foreground mb-6">立即報名課程，掌握 Lovable + Automation + Agent 的完整技能</p>
          <a 
            href="https://smart4a.tw/edu/LovableClass.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            📚 立即報名課程
          </a>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Lovable;
